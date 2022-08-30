import {Box, styled} from "@mui/material";
import {styles} from './styles';

type CoinBlockProps = {
    image: string
    title: string
    subtitle: string
    currentPrice: number
    changedPercent: number
}

const StyledImage = styled('img')(() => ({
    ...styles.image
}))

export const CoinBlock = ({image, title, changedPercent, currentPrice, subtitle}: CoinBlockProps) => {
    return (
        <Box sx={styles.wrapper}>
            <StyledImage src={image}/>
            <Box>
                <Box sx={styles.title}>{title}</Box>
                <Box sx={styles.subtitle}>{subtitle}</Box>
            </Box>
            <Box>
                <Box sx={styles.currentPrice}>${Math.round(currentPrice * 100) / 100}</Box>
                <Box
                    sx={{
                        ...styles.changedPercent,
                        ...(changedPercent > 0 && styles.green),
                        ...(changedPercent < 0 && styles.red),
                    }}
                >
                    {Math.round(changedPercent * 100) / 100}%
                </Box>
            </Box>

        </Box>
    )
}
