// import { Link } from "react-router-dom";
import HeaderThird from "../UI/HeaderThird";
import UList from "../UI/UList";
import UnderlineLink from "../UI/UnderlineLink";

function Footer() {
  return (
    <footer className="px-5 py-8 text-xs bg-blue-200">
      <div className="grid md:grid-cols-3 grid-cols-1">
        {/* Customer Support */}
        <div>
          <HeaderThird>
            Customer <br /> Support
          </HeaderThird>
          <UList>
            <li>
              <UnderlineLink to={"#"}>FAQs</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>Shipping & Returns</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>Order Tracking</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>Contact Us</UnderlineLink>
            </li>
          </UList>
        </div>

        {/* Social Media */}
        <div>
          <HeaderThird>Follow Us</HeaderThird>
          <UList>
            <li>
              <UnderlineLink to={"#"}>Facebook</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>Instagram</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>Twitter</UnderlineLink>
            </li>
            <li>
              <UnderlineLink to={"#"}>LinkedIn</UnderlineLink>
            </li>
          </UList>
        </div>

        {/* Contact Information */}
        <div>
          <HeaderThird>Contact Us</HeaderThird>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-7">
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
