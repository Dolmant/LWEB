(ns lweb.Shop.CartManagement.CartManagementActions
    (:require [rum.core :as rum]
    [cljs-react-material-ui.core :as ui]))

(def types {
    :POSTAGE_REQUEST "POSTAGE_REQUEST",
    :POSTAGE_REPLY "POSTAGE_REPLY",
    :POSTAGE_ERROR "POSTAGE_ERROR",
})

(def actionCreators {
    :postage (type: string) => (dispatch: any, getState: any) => {
        dispatch({
            type: types.POSTAGE_REPLY,
            payload: {
                type,
            },
        });
    },
};
)