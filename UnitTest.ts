import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithThemeProvider } from 'src/utils/testUtils';

import Button from '.';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from 'src/utils/testUtils';

import Header from '.';


// Getby trả về phần từ , nếu có lỗi trả về mô tả lỗi
// Queryby trả về phần tử , nếu có lỗi trả về null ( dùng để check xem có element hay không)
// Findby trả về promise , resolve khi tìm thấy , reject khi ko tìm thấy hoặc thời gian tìm quá 1s
//GetAllby , QueryAllby return về array
// ByLabeltext tìm cái label hợp với text , return về element có liên quan với label đó
// ByPlaholer tìm thuộc tính placeholder trả về element
// ByText tìm tất cả text node match
// ByDisplayValue return về input,textarea có value match


// test a header

describe('components/Header', () => {
  describe('snapshot', () => {
    it('should render and match the snapshot', () => {
      const { container } = renderWithThemeProvider(
        <Header authText="have text" color="red" />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    it('should render and have a text', () => {
      const { container } = renderWithThemeProvider(
        <Header authText="have text" color="red" />,
      );
      // check 1 mảng có have text
      expect(screen.getAllByText('have text')).toHaveLength(1);
    });
    it('should render and have a title is Doctor A', () => {
      const title = 'Doctor A';
      renderWithThemeProvider(<Header authText={title} color="red" />);
      expect(screen.queryByText('Doctor A')).toContainHTML('<h2></h2>');
    });
  });
});


// Test a Button

describe('components/Button', () => {
  describe('snapshot', () => {
    it('should render and match the snapshot', () => {
      const { container } = renderWithThemeProvider(<Button />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('props', () => {
    it('should have children', () => {
      const text = 'Foo';

      renderWithThemeProvider(<Button>{text}</Button>);

      expect(screen.getByText(text).parentNode?.children).toHaveLength(1);
    });

    it('should have a class attribute', () => {
      const { container } = renderWithThemeProvider(<Button />);

      expect(container.firstChild).toHaveAttribute('class');
    });

    it('should adopt a valid attribute', () => {
      const id = 'Foo';
      const { container } = renderWithThemeProvider(<Button id={id} />);

      expect(container.firstChild).toHaveAttribute('id', id);
    });

    it('should render its text', () => {
      const text = 'Foo';
      const { container } = renderWithThemeProvider(<Button>{text}</Button>);

      expect(container.firstChild).toHaveTextContent(text);
    });

    it('should handle click event', () => {
      const onClickSpy = jest.fn();
      const text = 'Foo';

      renderWithThemeProvider(<Button onClick={onClickSpy}>{text}</Button>);
      userEvent.click(screen.getByText(text));

      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
});
