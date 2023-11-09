import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { addtocart } from "../features/cartslice";

export default function AllCart() {

  const items = useSelector((state)=>state.Allcarts.items)

  const dispatch = useDispatch();
  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow>
          {items.map((item)=>(
            <MDBCol size="3" key={item.id}>
            <MDBCard>
              <MDBCardImage
                src={item.image}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle>${item.price}</MDBCardTitle>
                <MDBCardText>{item.category}</MDBCardText>
                <MDBBtn onClick={()=>dispatch(addtocart(item))}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
