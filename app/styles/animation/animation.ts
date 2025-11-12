import { Variants } from "framer-motion";
export const ContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};
export const FadeUpVariant:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,
    transition:{
        duration:0.6,
        ease:'easeOut'
    }
   },
};



export const HeroRecedeVariant:Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 12, // smooth and gradual
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror', // goes back and forth
    },
  },
}