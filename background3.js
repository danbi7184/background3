Module.register("background3", {
    defaults: {
    },

    getStyles: function() {
        return ["background3.css"]
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var img = document.createElement("img");
        img.src = "modules/background3/photo3.jpg";
        img.id = "image";
        wrapper.appendChild(img);
        return wrapper;
    },
})