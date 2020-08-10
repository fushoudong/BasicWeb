let EventUtil = {
	//  添加事件
	addHandler: function(element, type, handler){
		if(event.addEventListener) {
			element.addEventListener(type, handler, false)
		}else if(event.attachEvent) {
			element.attachEvent('on' + type, handler, false)
		}else {
			element['on' + type] = handler
		}
	},
	// 删除事件
	removeHandler: function(element, type, handler) {
		if(event.removeListener) {
			element.removeListener(type, handler, false)
		}else if(event.detachEvent) {
			element.detachEvent('on' + type, handler, false)
		}else {
			element['on' + type] = null
		}
	},
	// 获取event对象 
	getEvent: function(event) {
		return event || window.event
	},
	// 获取target
	getTarget: function(event) {
		return event.target || event.srcElement
	},
	// 阻止冒泡
	stopPropagation(event) {
		if(event.stopPropagation) {
			event.stopPropagation()
		}else {
			event.cancelBubble = true
		}
	},
	// 阻止捕获
	preventDefault(event) {
		if(event.preventDefault) {
			event.preventDefault()
		}else { 
			event.defaultValue = true
		}
	}
}