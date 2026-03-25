import "./index.css"
import { BookshelfButton } from "../../shered/bookshelf"
import { PeriferalButton } from "../../shered/periferal"
import { TitlePage } from "../../shered/title_page"


export const MainPage = () => {
    return (
        <div>
            <TitlePage />
            <BookshelfButton />
            <PeriferalButton />
        </div>
    )
}