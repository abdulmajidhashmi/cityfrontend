
import Faq from "./Faq.js";
import Form from "./Form.js";
import Getintouch from "./Getintouch.js";
import Hero from "./Hero.js";
import Powerfulfeautures from "./Powerfulfeautures.js";
import Pricing from "./Pricing.js";
import Step from "./Step.js";
import Testimonials from "./Testemonials.js";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

const Postad = () => {

    
    return (




        <>
            <Hero />
            <Step />
            <Form />
            {/* <Powerfulfeautures/> */}

            {/* <Pricing/> */}
            {/* <Testimonials/> */}
            <Faq />
            {/* <Getintouch/> */}
        </>

    )
}



export default Postad;