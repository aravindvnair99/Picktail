var mainVM;
$(document).ready(function () {
    mainVM = new ClassViewModel();

    ko.applyBindings(mainVM, $('#body')[0]);
});

function ClassViewModel() {
    self = this;
    this.email = ko.observable('');
    this.phone = ko.observable('');
    this.name = ko.observable('');
    this.message = ko.observable('');
    this.subscribe = ko.observable('');

    this.submit = function () {
        
        $.ajax({
            type: "POST",
            url: "Default.aspx/sendContact",
            data: "{'email':'" + this.email() + "','phone':'" + this.phone() + "','name':'" + this.name() + "','message':'" + this.message() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                self.email('');
                self.message('');
                self.name('');
                self.phone('');
                alert("Enquiry Recieved!!");
            },
            error: function (msg) {
                alert("error");
            }
        });

    }
    this.ssubmit = function () {

        $.ajax({
            type: "POST",
            url: "Default.aspx/sendSubscribe",
            data: "{'subscribe':'" + this.subscribe() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                self.subscribe('');
                
                alert("Subscribed!!");
            },
            error: function (msg) {
                alert("error");
            }
        });

    }


}