import {
	fetchAccountsFailure,
	fetchAccountsStart,
	fetchAccountsSuccess,
} from './redux/accountSlice';
import {
	fetchAccounts,
	fetchCategories,
	fetchIncomes,
	fetchTransactions,
} from './redux/actions';
import {
	fetchCategoriesFailure,
	fetchCategoriesStart,
	fetchCategoriesSuccess,
} from './redux/categorySlice';
import {
	fetchTransactionsFailure,
	fetchTransactionsStart,
	fetchTransactionsSuccess,
} from './redux/transactionSlice';
import {
	fetchIncomeFailure,
	fetchIncomeStart,
	fetchIncomeSuccess,
} from './redux/incomeSlice';
import {
	fetchExpenseFailure,
	fetchExpenseSuccess,
} from './redux/ExpenseSlice';
import { fetchExpenseStart } from './redux/ExpenseSlice';

const callFetchExpenses = async (dispatch) => {
	try {
		dispatch(fetchExpenseStart());
		const data = await fetchIncomes();
		dispatch(fetchExpenseSuccess(data));
	} catch (error) {
		fetchExpenseFailure(error.message);
	}
};

const callFetchIncomes = async (dispatch) => {
	try {
		fetchIncomeStart();
		const data = await fetchIncomes();
		dispatch(fetchIncomeSuccess(data.incomes));
	} catch (error) {
		dispatch(fetchIncomeFailure(error.message));
	}
};

const callFetchCategoriesFunction = async (dispatch) => {
	try {
		fetchCategoriesStart();
		const data = await fetchCategories();
		dispatch(fetchCategoriesSuccess(data.categories));
	} catch (error) {
		dispatch(fetchCategoriesFailure(error.message));
	}
};

const callFetchTransactionsFunction = async (dispatch) => {
	try {
		dispatch(fetchTransactionsStart());
		const data = await fetchTransactions(dispatch);

		dispatch(fetchTransactionsSuccess(data.transactions));
	} catch (error) {
		dispatch(fetchTransactionsFailure(error.message));
	}
};

const callFetchAccountsFunction = async (dispatch) => {
	try {
		dispatch(fetchAccountsStart());
		const data = await fetchAccounts();
		dispatch(fetchAccountsSuccess(data.accounts));
		console.log(data.accounts);
	} catch (error) {
		dispatch(fetchAccountsFailure(error.message));
	}
};

export {
	callFetchIncomes,
	callFetchCategoriesFunction,
	callFetchTransactionsFunction,
	callFetchAccountsFunction,
	fetchIncomes,
	callFetchExpenses,
};
