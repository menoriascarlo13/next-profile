import Consoler from '@/services/consoler';

const getCurrentEnvironment = ({ targetEnvironment = ['development'] }: any): boolean => {
  try {
    const env = process.env.NODE_ENV || 'development';

    const hasCurrentEnvironment = targetEnvironment.find((environment: any) => environment === env);

    return env === hasCurrentEnvironment;
  } catch (error) {
    Consoler({
      err: error,
      message: `Error detecting current environment at getCurrentEnvironment.ts: ${JSON.stringify(error)}`,
      type: 'error'
    });

    return false;
  }
};

export default getCurrentEnvironment;
