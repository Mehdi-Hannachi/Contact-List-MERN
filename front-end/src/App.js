import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, toggleFalse } from "./JS/actions/actionContact";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const getAllContacts = () => {
    dispatch(getContacts());
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Link to="/Contact_list">
          <Button variant="outline-primary button">Contact List</Button>
        </Link>
        <Link to="/Add_Contact">
          <Button
            variant="primary button"
            onClick={() => dispatch(toggleFalse())}
          >
            Add Contact
          </Button>
        </Link>
        <Switch>
          <Route
            path="/(Add_Contact|Edit_Contact)/"
            render={() => <AddContact />}
          />
          <Route
            path="/Contact_list"
            render={() => (
              <div className="contact-list">
                {contacts.map((el, i) => (
                  <ContactCard contact={el} key={i} />
                ))}
              </div>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
