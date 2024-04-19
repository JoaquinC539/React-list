import { render, screen } from '@testing-library/react';
import LinksNav from '../components/LinksNav';
import { MemoryRouter } from 'react-router-dom';
test("It renders the correct number of navs based on the quanity of links (6 links per nav)",()=>{
    const links2 = [
        { to: '/link1', label: 'Link 1' },
        { to: '/link2', label: 'Link 2' },
        { to: '/link3', label: 'Link 3' },
        { to: '/link4', label: 'Link 4' },
        { to: '/link5', label: 'Link 5' },
        { to: '/link6', label: 'Link 6' },
        { to: '/link7', label: 'Link 7' },
        { to: '/link8', label: 'Link 8' },
        { to: '/link9', label: 'Link 9' },
        { to: '/link10', label: 'Link 10' },
        { to: '/link11', label: 'Link 11' },
        { to: '/link12', label: 'Link 12' },
        { to: '/link13', label: 'Link 13' }
      ];
      render(
        <MemoryRouter>
            <LinksNav links={links2} />
        </MemoryRouter>
      );
      const navBars=screen.getAllByRole("navigation");
      expect(navBars.length).toBe(3);
});