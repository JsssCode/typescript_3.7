export abstract class Helper {

   static nowDate: number = Date.now();

   static getTimeAgo(inputDate: Date) {
      return inputDate.toDateString();
   }

}