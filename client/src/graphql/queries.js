import {gql} from '@apollo/client'
const GET_PRODUCTS = gql`
	query {
		products {
			id
			name
		}
	}
`
export default {
	GET_PRODUCTS
}
