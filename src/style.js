// style.js

const styles = {
  paddingX: "sm:px-16 py-6",
  paddingY: "sm:py-16 px-12",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  
  heroHeadText: {
    background: "linear-gradient(to right, #2F89D0, #2ECC71)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  sectionHeadText: {
    fontSize: "64px",
    lineHeight: "78px",
    background: "linear-gradient(in oklab, #2F89D0, #2ECC71)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    // add more style properties as needed
  },

  
  sectionSubText: {
    fontSize: "32px",
    lineHeight: "39px",
    background: "linear-gradient(to bottom, #2F89D0, #2ECC71)",
    WebkitBackgroundClip: "text",
    color: "transparent"
    // add more style properties as needed
  },

  gradientBorder: {
    border: '2px solid',
    borderImage: 'linear-gradient(to right, #primary-color, #secondary-color)',
    borderImageSlice: 1,
  },
};

export { styles };
