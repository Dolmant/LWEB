(ns lweb.DynamicReact
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement :as CartManagement]
            [lweb.consts :as consts]
            [clojure.string :as s]
            ))

(defonce state
    (atom {:category "ALL"
        :list consts/HomeInitial
        :isTouch (< js/window/innerWidth 1000)
        :total 0
        :page "home"
        :touchmenu_active false
        :introOn true
        :overlay_vertical_index {}
        :overlay_image_num 0
        :overlay_image_src ""
        :overlay_types []
        :overlay_txt ""
        :overlay {:arrows {:left true :right true :up false :down false} :state false :image false :video false}))

(defn SetAttr [attr, value]
    (reset! state
        (update-in @state [attr] value)
    )
)

(defn SetAttrs [attrs]
    (reset! state
        (update-vals @state [attrs])
    )
)

(defn in? 
  "true if coll contains elm"
  [coll elm]  
  (some #(= elm %) coll))

(defn update-vals [map mf]
  (reduce #(update-in % [%2] (fn [_] (mf %2))) map (keys mf)))

(defn computeArrows [overlay_image_num current_category overlay_vertical_index NumberofVertical]
    (def limits (consts/ArrayLimitsCalc current_category))
    {
        :left (not (in (limits :left) overlay_image_num))
        :right (not (in (limits :right) overlay_image_num))
        :up (< (overlay_vertical_index :overlay_image_num) (- NumberofVertical 1))
        :down (> (overlay_vertical_index :overlay_image_num) 0)
    }
)

(defn NavOverlayImage [direction]
    (cond
        (= direction "left") (selectedOverlayImageNum (dec (@state :overlay_image_num)) (@state :category) (@state :overlay_vertical_index) (@state :overlay))
        (= direction "right") (selectedOverlayImageNum (inc (@state :overlay_image_num)) (@state :category) (@state :overlay_vertical_index) (@state :overlay))
        (= direction "up") (selectedOverlayImageNum (@state :overlay_image_num) (@state :category) ((update-in @state [:overlay_vertical_index overlay_image_num] inc) :overlay_vertical_index) (@state :overlay))
        (= direction "down") (selectedOverlayImageNum (@state :overlay_image_num) (@state :category) ((update-in @state [:overlay_vertical_index overlay_image_num] dec) :overlay_vertical_index)  (@state :overlay))
        :else "Incorrect nav call"
    )
)

(defn UpdateOverlayImage [overlay_image_num]
    (selectedOverlayImageNum overlay_image_num (@state :category) (@state :overlay_vertical_index) (@state :overlay))
)

(defn ToggleOverlay [state, image]
    (selectedOverlayImageNum (@state :overlay_image_num) (@state :category) (@state :overlay_vertical_index) (update-vals (@state :overlay) {:state state :image image}))
)

(defn selectedOverlayImageNum [overlay_image_num current_category overlay_vertical_index overlay]
    (if (not current_category)
        (SetAttrs {:overlay overlay :overlay_vertical_index: overlay_vertical_index :overlay_image overlay_image_num})
        (do
            (def tempImage (consts/getImageById overlay_image_num))
            (if isArray(tempImage.img_src)
                (SetAttrs {
                    :overlay_vertical_index overlay_vertical_index
                    :overlay_image_num overlay_image_num
                    :overlay_image_src (get-in tempImage [:img_src (overlay_vertical_index overlay_image_num)])
                    :overlay_thumb_src (get-in tempImage [:overlay_thumbs_src (overlay_vertical_index overlay_image_num)])
                    :overlay_types (tempImage :types)
                    :overlay_txt (tempImage :img_txt)
                    :overlay {:state (overlay :state) :image (overlay :image) :is_video (tempImage :is_video) :arrows (computeArrows overlay_image_num current_category overlay_vertical_index (count (tempImage :img_src)))}
                })
                (SetAttrs {
                    :overlay_vertical_index overlay_vertical_index
                    :overlay_image_num overlay_image_num
                    :overlay_image_src (tempImage :img_src)
                    :overlay_thumb_src (tempImage :thumbs_src)
                    :overlay_types (tempImage :types)
                    :overlay_txt (tempImage :img_txt)
                    :overlay {:state (overlay :state) :image (overlay :image) :is_video (tempImage :is_video) :arrows (computeArrows overlay_image_num current_category overlay_vertical_index 0)}
                })
            )
        )
    )
)

(defn SetCategory [category]
    (SetAttrs {
        :category category
        :page "portfolio"
        :list (if (in (keys projectList) category)
            (projectList category)
            consts/HomeInitial
        )})
)

(defn SetPage [page]
    (SetAttrs {
        :category ""
        :page page
    })
)

