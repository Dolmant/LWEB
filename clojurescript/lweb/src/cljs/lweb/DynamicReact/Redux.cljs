import {HomeInitial, category, isTouch, projectList, getImageById, ArrayLimitsCalc} from "./../consts"


(ns lweb.Shop.Checkout.CheckoutReducers
  (:require [rum.core :as rum]
            [lweb.Shop.CartManagement :as CartManagement]
            [lweb.consts :as consts]
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
        (update-in @state [attr] value)
    )
)

(defn in? 
  "true if coll contains elm"
  [coll elm]  
  (some #(= elm %) coll))

:updateCategory (fn [category] {
    dispatch({type: (types :UPDATE_CATEGORY), payload: category})
    dispatch({type: (types :SELECT_PAGE), payload: "portfolio"})
}),
:selectPage (page: string) => (dispatch: any) => {
    dispatch({type: types.UPDATE_CATEGORY, payload: ""})
    return dispatch({type: (types :SELECT_PAGE), payload: page})
},

(defn computeArrows [overlay_image_num current_category overlay_vertical_index NumberofVertical]
    (def limits (consts/ArrayLimitsCalc current_category))
    {
        :left (not (in (limits :left) overlay_image_num))
        :right (not (in (limits :right) overlay_image_num))
        :up (< (overlay_vertical_index :overlay_image_num) (- NumberofVertical 1))
        :down (> (overlay_vertical_index :overlay_image_num) 0)
    }
)

(defn selectedOverlayImageNum [overlay_image_num current_category overlay_vertical_index overlay]
    (if (not current_category)
        (SetAttrs {:overlay overlay :overlay_vertical_index: overlay_vertical_index :overlay_image overlay_image_num})
        (do
            
        )
    )
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

function selectedOverlayImageNum(overlay_image_num_ = InitalState.overlay_image,
    current_category = InitalState.category,
    overlay_vertical_index_ = InitalState.overlay_vertical_index,
    _overlay = InitalState.overlay,
    action,
) {
    let state = _overlay.state
    let image = _overlay.image
    case types.UPDATE_OVERLAY_IMAGE:
        overlay_image_num = action.payload
        break
    case types.TOGGLE_OVERLAY:
        state = action.payload.state
        image = action.payload.image
        break
    default:
        break
    }
    // need to check again because it can be changed above
    if (!overlay_vertical_index[overlay_image_num]) {
        overlay_vertical_index[overlay_image_num] = 0
    }
    const temp_image_data = getImageById(overlay_image_num)
    let overlay_image_src = ""
    let overlay_thumb_src = ""
    let vertical_limit = 0
    const is_video = temp_image_data.is_video
    if (Array.isArray(temp_image_data.img_src)) {
        overlay_image_src = temp_image_data.img_src[overlay_vertical_index[overlay_image_num]]
        overlay_thumb_src = temp_image_data.overlay_thumbs_src[overlay_vertical_index[overlay_image_num]]
        vertical_limit = temp_image_data.img_src.length
    } else {
        overlay_image_src = temp_image_data.img_src
        overlay_thumb_src = temp_image_data.thumbs_src
    }
    const arrows = computedarrows(
        overlay_image_num,
        current_category,
        overlay_vertical_index,
        vertical_limit)
    return {
        overlay_vertical_index,
        overlay_image_num,
        overlay_image_src,
        overlay_thumb_src,
        overlay_types: temp_image_data.types,
        overlay_txt: temp_image_data.img_txt,
        overlay: {
            arrows,
            state,
            image,
            is_video,
        },
    }
}

function selectedCategory(state = InitalState.category, action) {
    let selectedcat = state
    if (action.type === types.UPDATE_CATEGORY) {
        selectedcat = action.payload
    }
    return selectedcat
}

function selectedList(state = InitalState.list, action) {
    let list
    if (action.type === types.UPDATE_CATEGORY) {
        if (Object.keys(projectList).includes(action.payload)) {
            list = projectList[action.payload]
        } else {
            // Home list
            list = InitalState.list
        }
        return list
    }
    return state
}

function introState(state = InitalState.introOn, action) {
    if (action.type === types.UPDATE_INTROSTATE) {
        return action.payload
    }
    return state
}

function touchmenuToggle(state = InitalState.touchmenu_active, action) {
    if (action.type === types.TOGGLE_TOUCHMENU) {
        return !state
    }
    return state
}

function selectPage(state = InitalState.page, action) {
    if (action.type === types.SELECT_PAGE) {
        return action.payload
    }
    if (action.type === types.UPDATE_CATEGORY) {
        return "portfolio"
    }
    return state
}

const totalIS = 0

export function TotalReducer(state: number = totalIS, action: any, shoppingCart: any, postageCalculator: any) {
    let total = 0
    shoppingCart.forEach((item) => {
        total += item.type.cost * item.count
    })
    total += postageCalculator.postageResult.cost
    return total
}
