import Header from '../components/Header';
import Searchsection from '../components/Searchsection';
import Jobs from '../components/Jobs';
import Rental from '../components/Rental';
import Category from  '../components/Category';
import Steps from '../components/Steps';
import Mobileapp from '../components/Mobileapp';
import Footer from '../components/Footer';
import Mainsearch from '../components/MainHeader';
export default function Home() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
      rel="stylesheet" />



    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
      rel="stylesheet"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />

    <script type="application/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.8/handlebars.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.13.3/cdn.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.45.1/apexcharts.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
    <Header />
    <Searchsection />
    <Jobs />
    <Rental />
    <Category />
    <Steps />
    <Mobileapp />
    <Footer />
  </>
  );
}
