/* eslint-disable react/prop-types */
import { Container, Grid, Typography } from "@mui/material";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid
          container
          direction="row"
          spacing={5}
          className="md:min-h-96 justify-center items-stretch md:justify-between"
        >
          <Grid
            item
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-5"
          >
            <Typography className="font-bold" variant="h6" gutterBottom>
              Profile.fi Project
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
          </Grid>

          {/* Support */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            <Typography gutterBottom>{i18n.t("footer.address")}</Typography>
            <Typography variant="body2">kumarutkarsh946@gmail.com</Typography>
            <Typography variant="body2">+9162045.....</Typography>
          </Grid>

          {/* Account */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.account")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link onClick={scrollToTop} to="/account" sx={{ color: "white" }}>
                  {i18n.t("footer.myAccount")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/signup" sx={{ color: "white" }}>
                  {i18n.t("footer.sign")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/cart" sx={{ color: "white" }}>
                  {i18n.t("footer.cart")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/wishlist" sx={{ color: "white" }}>
                  {i18n.t("footer.wishlist")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/category" sx={{ color: "white" }}>
                  {i18n.t("footer.shop")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Quick Link */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link to="/allProducts" sx={{ color: "white" }}>
                  {i18n.t("allProducts.redTitle")}
                </Link>
              </li>
              <li>
                <Link to="/category" sx={{ color: "white" }}>
                  {i18n.t("category.redTitle")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.usage")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.FAQ")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/contact" sx={{ color: "white" }}>
                  {i18n.t("footer.Contact")}
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
