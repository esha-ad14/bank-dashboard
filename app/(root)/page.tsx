import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className = "home">
            <div className = "home-content">
                <header className = "home-header">
                    <HeaderBox
                        type = "greeting"
                        title = "Hello"
                        user = {loggedIn?.name || 'Guest'}
                        subtext = "Access your accounts and transactions here."
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1542.23}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 123.32}, {currentBalance: 342.32}]}
            />
        </section>
    )
}

export default Home
