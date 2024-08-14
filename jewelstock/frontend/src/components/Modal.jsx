import React, { useContext } from "react";

// モーダルのテンプレート
export const Modal = (props) => {
    const { activeProduct, closeModal } = props;


    return (
        <>
        <div className="modal_area">
            <div className="modal_bg_area" onClick={ closeModal }></div>
            <div className="modal_content_area">
                <form>
                    
                    <input type="text" defaultValue={activeProduct.product_code} />
                    <input type="text" defaultValue={activeProduct.name} />
                    <input type="text" defaultValue={activeProduct.category} />
                    <input type="text" defaultValue={activeProduct.description} />
                    <input type="text" defaultValue={activeProduct.weight} />
                    <input type="text" defaultValue={activeProduct.size} />
                    <input type="text" defaultValue={activeProduct.price} />

                    <input className="btn btn-success" type="button" value="保存" />
                    {/* <input className="btn btn-success" type="button" onClick={ () => props.handleSubmit(this.state.activeProduct) } value="保存" /> */}

                </form>
            </div>
        </div>        
        </>
    )



}