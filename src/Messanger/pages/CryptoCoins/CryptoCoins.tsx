import {Box} from "@mui/material"
import {TCoinsResponse} from "src/types/responses";
import {CoinBlock} from "./components";
import {styles} from './styles';

export const CryptoCoins = ({data}: { data: TCoinsResponse[] }): JSX.Element => {


    return (
        <Box sx={styles.wrapper}>
            {data.map(el => (
                <CoinBlock
                    key={`${el.symbol} ${el.id}`}
                    image={el.image}
                    title={el.name}
                    subtitle={el.symbol}
                    currentPrice={el.current_price}
                    changedPercent={el.price_change_percentage_24h}
                />))}
        </Box>
    )
}
