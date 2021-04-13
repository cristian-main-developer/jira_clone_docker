import { catchErrors } from 'errors';
import { signToken } from 'utils/authToken';
import createAccount from 'database/createGuestAccount';

export const createGuestAccount = catchErrors(async (_req, res) => {
  const user = await createAccount();
  console.log(user);
  res.respond({
    authToken: signToken({ sub: user.id }),
  });
});
