import React from "react";
import { Button, Card } from "react-bootstrap";

const ProdoctList = () => {
  const Products = [
    {
      name: "Sneakers LC z5 Noir - Design Perforé - Cuir",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/4484/1.jpg?5150",
      price: 67.0,
    },
    {
      name: "Samsung Curved TV 65 4K UHD -TNT- Noir - Garantie 2 Ans",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/33/0463/1.jpg?1187",
      price: 250,
    },
    {
      name: "Pyrex Daily Metal - Plat rectangulaire en metal - 28x18cm",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/9093/1.jpg?3537",
      price: 19,
    },
    {
      name: "Infinix Note 30 - 8GB RAM + 256GB – Noir - Garantie 1an",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/6887/1.jpg?8943",
      price: 670,
    },
    {
      name: "Generic Smart Watch T800 Ultra Smart Watch Series 8 LCD Écran Tactile Complet NFC Appel Bluetooth 2023 - Noir",
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/3887/1.jpg?1842",
      price: 39.0,
    },
  ];
  return (
    <div className="list" >
      {Products.map((item) => (
        <div style={{marginLeft:"50px"}} >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.pic} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <h4>
                {`${item.price} DT`}
              </h4>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProdoctList;
