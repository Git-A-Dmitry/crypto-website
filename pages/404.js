import Layout from '@/components/Layout';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Layout>
      <section>
        <div className='container'>
          <div className='--center-all'>
            <h2>Sorry, you might be lost..</h2>
            <p>This page does not exist. Please go back to Homepage. </p>
            <br />
            <Link href='/'>
              <button className='--btn --btn-primary'>Back to Homepage</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
