import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    // <AnimatePresence mode='wait'>
    //   <motion.div
    //     key={router.route}
    //     initial='initialState'
    //     animate='animateState'
    //     exit='exitState'
    //     transition={{ duration: 0.7 }}
    //     variants={{
    //       initialState: {
    //         // opacity: 0.4,
    //         filter: 'blur(3px)',
    //       },
    //       animateState: {
    //         // opacity: 1,
    //         filter: 'blur(0px)',
    //       },
    //       exitState: {
    //         filter: 'blur(3px)',
    //       },
    //     }}
    //   >
    <Component {...pageProps} />
    //   </motion.div>
    // </AnimatePresence>
  );
}
