import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  ClientServiceProvider: any;
  /**
   * Takes a value and makes it lowercase.
   */
 
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.Nom.toLowerCase().includes(terms); // only filter client name
    });
   
/*
      if (Array.isArray(items) && items.length && terms && terms.length) {
        return items.filter(item => {
          let keys = Object.keys(item);
          if (Array.isArray(keys) && keys.length) {
            for (let key of keys) {
              if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((terms.toString().toLowerCase().replace(/ /g, '')))) {
                return true;
              }
            }
            return false;
          } else {
            return false;
          }
        });
      } else {
        return items;
      }*/
    }
    /*
    getclient(client){         /// the passed data (country) is the data from the API 
      let pre_selected_country = []
          this.getCountries().then(res => {      
             for (let item in res){
                if (client === res[item]['Nom']){
                 pre_selected_country.push({ id:res[item]['ID'], name:res[item]['Nom'] });
                }
             }
          });
         return pre_selected_country;
  }

  async getCountries(){
    let pack = [];
       await this.ClientServiceProvider.getCountries().toPromise().then(res => {
          for(let i in res){
             pack.push({ id:res[i]['id'], name:res[i]['name_en'] });
         }
      }
  });
  return pack;
 }*/
}

