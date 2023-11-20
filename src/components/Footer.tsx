import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

function Footer({ viewCart }: PropsType) {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>TOTAL ITEMS : {totalItems}</p>
      <p>TOTAL PRICE : {totalPrice}</p>
      <p>SHOPPING CART &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
}

export default Footer;
