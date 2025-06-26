import { body } from 'express-validator';

export const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('role').isIn(['admin', 'user']).withMessage('Invalid role'),
  body('phone')
    .if((value, { req }) => req.body.role === 'admin')
    .notEmpty().withMessage('Phone is required for admin')
    .isMobilePhone().withMessage('Invalid phone number'),
];
