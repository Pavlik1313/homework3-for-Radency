class DateHelper {
    getCreatedTime(){
        const now = new Date();
        const date = now.toDateString().slice(4)
        const time = now.toTimeString().slice(0,5)
        return `${date} ${time}`
    }
    findDates(text:string){
        const reg = /(?<!\d)((30|31)|([012]?\d))(?:([./-] ?)| )((0?\d)|(1[012]))(?:([./-] ?)| )(\d{2,4})(?!\d)/g;
        let dates: string[] = []
        Array.from(text.matchAll(reg)).map((element) => {
                const day = element[1];
                const mouth = element[5];
                const year = element[9];
                const date = new Date(`${mouth}.${day}.${year}`).toDateString();
                if (date!=='Invalid Date'){
                    dates = [...dates, date.slice(4)];
                }

            }
        )
        return dates;
    }
}
export const dateHelper = new DateHelper()