import Footer from '../components/Footer';
import Layout from './Layout';
import Navbar from '../components/Navbar';

function ErrorPage() {

    return (
      <Layout>
      <Navbar />
      <section className='flex flex-col justify-center items-center gap-[30px] mt-[250px]'>
        <h2>
          404
        </h2>
        <h3>
          Page Not Found.
        </h3>
      </section>
      <Footer />
    </Layout>
    )
};

export default ErrorPage;