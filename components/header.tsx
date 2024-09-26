import { NavMenu } from '@/components/nav-menu';

export const Header = () => {
  return (
    <header className="flex justify-between py-4 px-10">
      <div className="uppercase font-bold">Logo</div>
      <NavMenu />
    </header>
  );
};
