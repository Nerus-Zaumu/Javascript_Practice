class Group
{
    constructor(group)
    {
        this.group = [];
    }
    add(value)
    {
        while(this.group[Symbol.iterator]()["value"] !== undefined)
        {
            if(value !== this.group[Symbol.iterator]())
            {
                this.group.push(value);
            }
        }
    }
    delete(value)
    {
        for(val of this.group)
        {
            if(val === value)
            {
                this.group.unshift(val);
            }
        }
    }
    has(value)
    {
        if(value in this.group)
        {
            return true;
        }
        else{
            return false;
        }
    }
    static from(some_iterator)
    {
        let new_group = [];
        for(let element of some_iterator)
        {
            new_group.push(element);
            if(new_group.indexOf(element) + 1 === new_group.indexOf(element))
            {
                new_group.pop();
            }
        }
    }
}
