describe('getText()', function()
{
    it('should get Sinethembas name', function()
    {
        assert.equal(getText("Sinethemba"), 'Sinethemba');
    });

    it('should get Aneles name', function()
    {
        assert.equal(getText("Anele"), 'Anele');
    });
});
