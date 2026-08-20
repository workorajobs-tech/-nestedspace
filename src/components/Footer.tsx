import "./Footer.css"
import { businessEntity, getBusinessAddressText, getTelephoneHref } from "../seo/businessEntity"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p>&copy; 2026 Nested Space. All rights reserved.</p>
        <address>
          {businessEntity.name} · {getBusinessAddressText()} ·{" "}
          <a href={getTelephoneHref()}>{businessEntity.telephone}</a>
        </address>
        <p>{businessEntity.serviceAreaSentence}</p>
      </div>
    </footer>
  )
}

export default Footer
