import styles from "../styles/components/Contact.module.scss";

function Contact() {
    return (
        <div className={styles.container} id="contact">
            <h1>Contact</h1>
            <p>
                We offer full-service catering for any event, large or small. 
                We understand your needs and we will cater the food to satisfy 
                the biggerst criteria of them all, both look and taste. Do not 
                hesitate to contact us.
            </p>
            <h3>Catering Service, 42nd Living St, 43043 New York, NY</h3>
            <p>
                You can also contact us by phone 00553123-2323 or email 
                catering@catering.com, or you can send us a message here:
            </p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="How many people" />
                <input type="datetime-local" value="2021-11-10T19:30" />
                <input type="text" placeholder="Message/Special requiriments" />
                <button>SEND MESSAGE</button>
            </form>
        </div>
    );
}

export default Contact;
