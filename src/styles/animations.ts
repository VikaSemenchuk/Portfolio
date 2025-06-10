export const sectionVariant = {
    hidden : {opacity:0, y:20},
    visible: {
        opacity: 1,
        y:0,
        tansition: {duration: 0.6, ease: "easeInOut"}
    }
}

export const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const listContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const defaultViewport = { once: true, amount: 0.1 };