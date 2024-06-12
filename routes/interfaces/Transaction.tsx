interface Transaction {
    account_number: number,
    id: number,
    date: string,
    payment_method: string,
    transaction_type: string,
    transaction_category: string,
    transaction_description: string,
    reward_is_points: boolean,
    points_or_cashback_percentage: number,
    amount: number,
    is_verified: boolean

}