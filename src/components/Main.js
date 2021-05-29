import MainPage from './category/component'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Main() {
    return (
        <div>
            <Container maxWidth="lg">
                <Typography variant="h5">
                    Our Products
                </Typography>
                <MainPage />
            </Container>
        </div>
    )
}