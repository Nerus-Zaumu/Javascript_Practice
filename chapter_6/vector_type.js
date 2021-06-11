class Vec
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    Plus(vector_a)
    {
        vector_a = this.x + this.y;
        return vector_a;
    }
    Minus(vector_b)
    {
        vector_b = this.x - this.y;
        return vector_b;
    }
}
new_vec = new Vec(5, 2).Plus();
new_vec_b = new Vec(5, 2).Minus();
console.log(new_vec);
console.log(new_vec_b);