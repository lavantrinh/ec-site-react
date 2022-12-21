import React from 'react';
import { Nav } from 'react-bootstrap';

function Footer(props) {
    return (
        <div className="container">
  <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>FAQs</Nav.Link>
             <Nav.Link>About</Nav.Link>
    
    </ul>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
</div>
    );
}

export default Footer;