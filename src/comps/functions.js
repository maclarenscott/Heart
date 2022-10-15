import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

// Create formatter (English).

export default function phoneFormat(input){
    
    if(!input || isNaN(input)) return `input must be a number was sent ${input}`
    if(typeof(input) !== 'string') input = input.toString()
    if(input.length === 10){
      return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }else{
      return 'N/A'
    }
  }

  export function timeDifference(time) {
    const timeAgo = new TimeAgo('en-US');
    // return timeAgo.format(new Date().now()-100000);
    return '3 days ago';
}