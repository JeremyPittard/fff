import "./styles.scss";
console.log(
  "Happy birthday Laura! if anyone wishes to add to the feed, just do the old #ferreriflauntsforty on the gram"
);
theRedo();

function theRedo() {

    //quick and dirty way to reload feed. ideally with time I'd re init the scipt tag

    setTimeout(() => {window.location.reload(false)}, 900000)


}