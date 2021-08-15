export class NodeLayoutsData {

constructor() {
	this.absolute=new Absolute()
	this.fixed=new Fixed()
	this.static=new Static()
}
	absolute:Absolute
	fixed: Fixed
	static:Static
}

class Absolute {
	width: string
	height: string
	top: string
	left: string
}
class Fixed{
	width: string
	height: string
	top: string
	left: string



}

class Static{
	place: string
	width: string
	height: string
}