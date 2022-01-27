module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4d4f31fc942ac7439d5095999eb7d4c'),
  },
});
