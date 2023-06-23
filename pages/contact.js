import Layout from '@/components/Layout';
import styles from '../styles/Contact.module.scss';
import Intro from '@/components/Intro';

const contact = () => {
  return (
    <Layout>
      <Intro />
      <section className={styles.contact}>
        <h1>Contacts</h1>
        <div className={styles.contacts}>
          <form
            action='https://getform.io/f/d78cb41f-c4ad-4655-982c-7946fac55285'
            method='POST'
            encType='multipart/form-data'
            className={styles['contact-form']}
          >
            <div className={styles['form-name']}>
              <div className={styles.col}>
                <div className={styles['input-box']}>
                  {/* <label htmlFor=''>Name</label> */}
                  <input
                    type='text'
                    name='name'
                    required='required'
                  />
                  <span className={styles.text}>Name</span>
                  <span className={styles.line}></span>
                </div>
              </div>

              <div className={styles.col}>
                <div className={styles['input-box']}>
                  <input
                    type='text'
                    name='phone'
                    required='required'
                  />
                  <span className={styles.text}>Phone</span>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>

            <div className={styles['form-name']}>
              <div className={styles.col}>
                <div className={styles['input-box']}>
                  {/* <label htmlFor=''>Email</label> */}
                  <input
                    type='text'
                    name='email'
                    required='required'
                  />
                  <span className={styles.text}>E-mail</span>
                  <span className={styles.line}></span>
                </div>
              </div>

              <div className={styles.col}>
                <div className={styles['input-box']}>
                  {/* <label htmlFor=''>Subject</label> */}
                  <input
                    type='text'
                    name='subject'
                    required='required'
                  />
                  <span className={styles.text}>Subject</span>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>

            <div className={styles['form-name']}>
              <div className={styles.col}>
                <div className={`${styles['input-box']} ${styles.textarea}`}>
                  {/* <label htmlFor=''>Message</label> */}
                  <textarea
                    name='message'
                    required='required'
                    // cols='30'
                    // rows='8'
                  ></textarea>
                  <span className={styles.text}>Drop us a line</span>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
