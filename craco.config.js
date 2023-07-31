
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "common": path.resolve(__dirname, 'src/common/index'),
      "hooks": path.resolve(__dirname, 'src/hooks/'),
      "constants":path.resolve(__dirname, 'src/constants/'),
      "helpers":path.resolve(__dirname, 'src/helpers/'),
      "pages":path.resolve(__dirname, 'src/pages/'),
      "services":path.resolve(__dirname, 'src/services/'),
      "router":path.resolve(__dirname, 'src/router/'),
      "formValidation":path.resolve(__dirname, 'src/formValidation/'),
      "components":path.resolve(__dirname, 'src/components/'),
      "assets":path.resolve(__dirname, 'src/assets/'),
      "context":path.resolve(__dirname, 'src/context/'),
    }
  }
};