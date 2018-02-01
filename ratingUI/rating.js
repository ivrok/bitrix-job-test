function starRating(el, maxRating, setCallBack){
    Rating = function(el, maxRating){
        this._this = this;
        this.el = el;
        this.maxRating = maxRating ? maxRating : 5;
        this.setCallBack = setCallBack;
        console.log(this.maxRating, maxRating);
        this.rating = el.value ? parseFloat(el.value) : false;
    }
    Rating.prototype.init = function(){
        this.prerender();
        this.render();
        this.initHandlers();
    }
    Rating.prototype.prerender = function(){
        this.el.type='hidden';
        let tpl = `<div class="star-rating">
                <div class="stars">
                    <div class="max-rate"></div>
                    <div class="rate"></div>
                </div>
                <button class="star-btn">Кнопка</button>
            </div>`;

        this.ourRatingWrapper = document.createElement('div');
        this.el.parentNode.insertBefore(this.ourRatingWrapper, this.el.nextSibling);
        this.ourRatingWrapper.innerHTML = tpl;

        this.rateEl = this.ourRatingWrapper.querySelector('.star-rating');
        this.rateEl.wrapStars = this.rateEl.querySelector('.stars');
        this.rateEl.maxRate = this.rateEl.querySelector('.max-rate');
        this.rateEl.rate = this.rateEl.querySelector('.rate');
        this.rateEl.btn = this.rateEl.querySelector('.star-btn');
    }
    Rating.prototype.render = function(){
        let maxwidth = parseInt(this.rateEl.offsetWidth) < 400 ? this.rateEl.offsetWidth : 400;
        this.maxwidth = maxwidth;
        this.rateEl.style.width = maxwidth;
        let starWidth = maxwidth / 5;
        let starHeight = starWidth;
        this.rateEl.wrapStars.style.height = starHeight + 'px';
        this.rateEl.maxRate.style.backgroundSize = starHeight + 'px 100%';
        console.log(starHeight);
        this.rateEl.rate.style.backgroundSize = starHeight + 'px 100%';
        if (this.rating) this.rateEl.rate.style.width = (this.rating / (this.maxRating / 100)) + '%';
    }
    Rating.prototype.initHandlers = function(){
        let _this = this;
        this.rateEl.wrapStars.addEventListener('mousemove', this.moveRating.bind(this));
        this.rateEl.btn.addEventListener('click', this.setRating.bind(this));
    }
    Rating.prototype.moveRating = function(event){
        let percentRate = Math.round(event.offsetX / (this.maxwidth / 100));
        this.rateEl.rate.style.width = percentRate + '%';
    }
    Rating.prototype.setRating = function(event){
        let rating = ((this.maxRating / 100) * parseInt(this.rateEl.rate.style.width)).toFixed(1);
        this.el.value = rating;
        if (typeof this.setCallBack == 'function')
            this.setCallBack(rating);
    }
    let rating = new Rating(el, maxRating);
    rating.init();
}