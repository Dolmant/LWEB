(ns lweb.Shop.CartManagement.AddToCart
    (:require [rum.core :as rum]
    [cljs-react-material-ui.core :as ui]))

(rum/defc Footer [anchorEl types mini]
    (defn handleClick []
        (if (types.length === 1) {
        (do toastr.success("Success", "Item added to cart")
        this.props.addToCart(this.props.id, this.props.types[0]))
        this.setState({anchorEl: event.currentTarget}))
    )

    (defn handleClose []
        this.setState({anchorEl: null})
    )
    [:div {:style "display: inline block;"}
        [ui/Button {
            :variant (if mini "fab" "raised")
            :color "primary"
            :aria-label "add"
            :mini mini
            :aria-haspopup "true"
            onClick handleClick
        }
            (if mini [ic/add-icon] [:div "Add to cart"])
        ]
        [:ui/Menu {:id "simple-menu" :anchorEl anchorEl :open anchorEl onClose handleClose}
            (doseq [type types]
                [ui/menu-item {
                    :on-click (fn [] 
                    (do toastr.success("Success", "Item added to cart")
                    this.props.addToCart(this.props.id, type)
                    (handleClose))
                }
                type.desc]
            )
        ]
    ]
)
