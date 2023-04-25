import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-27c80-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
