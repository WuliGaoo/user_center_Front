import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'wuli_ice出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'wuli_ice',
          title: 'wuli_ice',
          href: 'https://github.com/WuliGaoo',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Github
            </>
          ),
          href: 'https://github.com/WuliGaoo',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
